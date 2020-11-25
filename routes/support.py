from flask import Blueprint, render_template, make_response

support_app = Blueprint('support', __name__, template_folder='../views')

@support_app.route('/')
def support():
    props = {
        'currentPage': 'support'
    }
    response = make_response(render_template(
        'support.html',
        props = props
    ), 200)
    response.headers['Cache-Control'] = 'max-age=60, public, stale-while-revalidate=2592000'
    return response