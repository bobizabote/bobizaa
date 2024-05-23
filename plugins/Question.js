# قائمة الأسئلة والأجوبة المقترنة
questions_answers = {
    "ما هو لون السماء؟": "أزرق",
    "ما هو عاصمة فرنسا؟": "باريس",
    "كم عدد أيام الأسبوع؟": "سبعة",
    "من هو مؤسس شركة أبل؟": "ستيف جوبز"
}

# الدالة للبحث عن الإجابة والرد على السؤال
def answer_question(question):
    if question in questions_answers:
        return questions_answers[question]
    else:
        return "آسف، لا أعرف الإجابة على هذا السؤال."

# التفاعل مع المستخدم
while True:
    user_question = input("سؤال: ")
    if user_question.lower() == "إنهاء":
        break
    else:
        answer = answer_question(user_question)
        print("الجواب:", answer)
