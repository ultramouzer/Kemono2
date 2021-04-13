import random
import string
import base64

from flask import session
from captcha.image import ImageCaptcha

def generate_captcha():
    image = ImageCaptcha()
    answer = ''.join(random.choice(string.ascii_lowercase + string.digits) for _ in range(4))
    data = image.generate(answer)

    session['captcha_answer'] = answer
    return base64.b64encode(data.getvalue()).decode()