from flask import Blueprint, request, jsonify
bp = Blueprint('stock', __name__, url_prefix='/stock')
from finance.stock import get_share_num

@bp.route('/shares', methods=('GET', 'POST'))
def shares():
    codeListStr = request.args.get('code')

    if not codeListStr:
        ret_data = {
            'code': 22001,
            'msg': 'no stock code' 
        }
    else:
        codeList = codeListStr.split(',')
        ret_data = {
            'code': 22000,
            'data': get_share_num(codeList)
        }
    return jsonify(ret_data)