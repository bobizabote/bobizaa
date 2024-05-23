import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.datasets import mnist

# تحميل بيانات MNIST
(train_images, train_labels), (test_images, test_labels) = mnist.load_data()

# تجهيز البيانات
train_images = train_images.reshape((60000, 28, 28, 1))
train_images = train_images.astype('float32') / 255

test_images = test_images.reshape((10000, 28, 28, 1))
test_images = test_images.astype('float32') / 255

# بناء النموذج
model = models.Sequential()
model.add(layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.MaxPooling2D((2, 2)))
model.add(layers.Conv2D(64, (3, 3), activation='relu'))
model.add(layers.Flatten())
model.add(layers.Dense(64, activation='relu'))
model.add(layers.Dense(10, activation='softmax'))

# تدريب النموذج
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.fit(train_images, train_labels, epochs=5, batch_size=64, validation_split=0.2)

# تقييم النموذج
test_loss, test_acc = model.evaluate(test_images, test_labels)
print('Test accuracy:', test_acc)
```

هذا الكود يستخدم مكتبة TensorFlow لبناء نموذج تعلم آلي يقوم بتصنيف الأرقام المكتوبة يدويًا في مجموعة بيانات MNIST. يمكنك تنفيذ هذا الكود على جهازك لبناء وتدريب النموذج، ثم قياس كفاءته في تصنيف الصور.
