from flask import Blueprint, request, make_response, render_template
from datetime import datetime

from ..types.account import Account, account_roles
from .admin_types import admin_props

admin = Blueprint('admin', __name__)

@admin.before_request
def check_credentials():
    """
    Should check for admin creds for the entire blueprint.
    Return `404` on fail and probably add a log entry.
    """
    pass

@admin.route('/admin')
def get_admin():
    props = admin_props.Dashboard()

    response = make_response(render_template(
        'admin_dashboard.html',
        props = props,
    ), 200)
    response.headers['Cache-Control'] = 's-maxage=60'
    return response

@admin.route('/admin/accounts', methods= ['GET'])
def get_accounts():
    accounts = [
        Account(
            id= '123',
            username= 'literal_who',
            created_at= datetime.now().isoformat(),
            password= '123qwe'
        ),
        Account(
            id= '456',
            username= 'sp_watcher',
            created_at= datetime.now().isoformat(),
            password= 'mod4free',
            role= 'moderator'
        ),
        Account(
            id= '123456qwerty',
            username= 'sp_watchers_watcher',
            created_at= datetime.now().isoformat(),
            password= 'kemonoAdmin',
            role= 'administrator'
        ),
    ]
    props = admin_props.Accounts(
        accounts= accounts,
        role_list= account_roles
    )

    response = make_response(render_template(
        'admin_accounts.html',
        props = props,
    ), 200)
    response.headers['Cache-Control'] = 's-maxage=60'
    return response

@admin.route('/admin/accounts', methods= ['POST'])
def change_accounts():
    pass

@admin.route('/admin/accounts/search', methods= ['POST'])
def search_accounts():
    pass

@admin.route('/admin/accounts/<account_id>', methods= ['GET'])
def get_account(account_id: str):
    """
    Detailed account page.
    """
    account = {}
    props = admin_props.Account(
        account= account
    )

    response = make_response(render_template(
        'admin_account_info.html',
        props = props,
    ), 200)
    response.headers['Cache-Control'] = 's-maxage=60'
    return response

@admin.route('/admin/accounts/<account_id>', methods= ['POST'])
def change_account():
    pass

@admin.route('/admin/accounts/<account_id>/files')
def get_account_files(account_id: str):
    """
    The lists of approved/rejected/queued files for the given account.
    """
    files = []
    account = {}

    props = admin_props.Account_Files(
        account= account,
        files= files
    )
    response = make_response(render_template(
        'admin_account_files.html',
        props = props,
    ), 200)
    response.headers['Cache-Control'] = 's-maxage=60'
    return response
