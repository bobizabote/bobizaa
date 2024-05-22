from pytube import YouTube

# رابط الفيديو من يوتيوب
video_url = "https://www.youtube.com/watch?v=VIDEO_ID"

# تحميل الفيديو
yt = YouTube(video_url)
yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first().download()
