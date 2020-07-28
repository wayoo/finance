import requests
import requests_cache
import datetime
from bs4 import BeautifulSoup
import re

requests_cache.install_cache('request_cache', backend='sqlite', expire_after=datetime.timedelta(days=1))


def _get_share_num_hk(code):
    r = requests.get(f'http://stock.finance.sina.com.cn/hkstock/info/0{code}.html')
    soup = BeautifulSoup(r.text, 'html.parser')
    table = soup.find('tbody')
    tr = table.find_all('tr')[5]
    td = tr.find_all('td')[1]
    text = td.get_text()
    nums = re.findall(r'\d+', text)
    name = soup.select_one(".stockHead h1").get_text()

    if nums:
        return {
            'code': code,
            'name': name,
            'share_num': int(nums[0]),
        }
    else:
        return {}

def _get_share_num_cn(code):
    r = requests.get(f'https://vip.stock.finance.sina.com.cn/corp/go.php/vCI_StockStructure/stockid/{code}.phtml')
    soup = BeautifulSoup(r.text, 'html.parser')
    row = soup.select('#StockStructureNewTable0 tbody tr')[4]
    text = row.select('td')[1].get_text()
    nums = re.findall(r'\d+', text) # unit 万
    name = soup.select_one("#toolbar .tbtb01 h1 a").get_text()

    if nums:
        return {
            'code': code,
            'name': name,
            'share_num': int(nums[0]) * 10000,
        }
    else:
        return {}

def get_share_num(arrCode):
    arrInfo = []
    for code in arrCode:
        if re.search('^\d{4}$', code):
            arrInfo.append(_get_share_num_hk(code))
        elif re.search('^\d{6}$', code):
            arrInfo.append(_get_share_num_cn(code))
    return arrInfo

if __name__ == "__main__":
    # print(get_share_num('3690'))
    # print(get_share_num('300648'))
    print(get_share_num(['300648', '3690']))