import openai

# تعيين مفتاح API الخاص بك
api_key = 'YOUR_API_KEY'

# تهيئة العميل
openai.api_key = api_key

# النص الذي سيتم استخدامه كمدخل
prompt_text = "Once upon a time, in a distant land, there was a kingdom ruled by a wise king."

# إعداد المعلمات
parameters = {
    "model": "text-davinci-003",  # نموذج OpenAI المستخدم
    "prompt": prompt_text,         # النص الذي سيتم استخدامه كمدخل
    "max_tokens": 50               # الحد الأقصى لعدد الكلمات في النص الناتج
}

# إرسال الطلب إلى API لتوليد النص
response = openai.Completion.create(**parameters)

# النص الناتج
generated_text = response.choices[0].text.strip()

print("Generated text:")
print(generated_text)
