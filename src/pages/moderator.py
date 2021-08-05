from flask import Blueprint, request, make_response, render_template

from .moderator_types import mod_props

moderator = Blueprint('mod', __name__)

@moderator.before_request
def check_credentials():
    """
    Should check for mod creds for the entire blueprint.
    Return `404` on fail and probably add a log entry.
    """
    pass

@moderator.route('/mod')
def get_mod():
    """
    Redirect to `/mod/dashboard`
    """
    return

@moderator.route('/mod/dashboard')
def get_dashboard():
    props = mod_props.Dashboard()

    response = make_response(render_template(
        'moderator_dashboard.html',
        props = props,
    ), 200)
    response.headers['Cache-Control'] = 's-maxage=60'
    return response

@moderator.route("/mod/tasks/files")
def get_files():
    files = []
    props = mod_props.Files(
        files= files
    )
    response = make_response(render_template(
        'moderator_files.html',
        props = props,
    ), 200)
    response.headers['Cache-Control'] = 's-maxage=60'
    return response
