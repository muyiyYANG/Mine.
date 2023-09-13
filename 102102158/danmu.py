import requests
import json
import re

def get_danmu(bvid,headers):
    # 查找弹幕链接--cid是指弹幕在视频中的唯一标识符
    cid_url = "https://api.bilibili.com/x/web-interface/view?bvid=" + bvid
    cid_req = requests.get(cid_url, headers=headers)
    cid_res = json.loads(cid_req.text)
    cid = cid_res['data']['cid']

    danmu_url = "https://comment.bilibili.com/" + str(cid) + ".xml"
    danmu_req = requests.get(danmu_url, headers=headers)
    danmu_req.encoding = 'utf-8'
    danmu_list = re.findall('<d p=".*?">(.*?)</d>',danmu_req.text)  # 正则表达式匹配弹幕
    for index in danmu_list:
        with open('弹幕.txt', mode='a', encoding='utf-8') as f:
            f.write(index)
            f.write("\n")
            print(index)
    return danmu_list

