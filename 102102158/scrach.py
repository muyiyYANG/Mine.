import requests
import json
from createExcel import createExcel
from createView import data_view
from createWordcloud import create_wordcloud
from danmu import get_danmu


danmu_list = []

url = "https://api.bilibili.com/x/web-interface/wbi/search/type?page_size=50&keyword=%E6%97%A5%E6%9C%AC%E6%A0%B8%E6%B1%A1%E6%9F%93%E6%B0%B4%E6%8E%92%E6%B5%B7&search_type=video"
# page_size=50：每页返回的结果数目为50
# keyword：搜索的关键词为“日本核污染染水排海”
# URL中的%E6%97%A5%E6%9C%AC%E6%A0%B8%E6%B1%A1%E6%9F%93%E6%B0%B4%E6%8E%92%E6%B5%B7是将中文字符进行 URL 编码后得到的结果
# search_type=video：搜索的类型为视频
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.69"
}
cookies = {
    "LIVE_BUVID": "AUTO4016261546844610",
    "dy_spec_agreed": "1",
    "i-wanna-go-back": "-1",
    "buvid_fp_plain": "undefined",
    "CURRENT_BLACKGAP": "0",
    "buvid3": "DB924180-3BD8-42B5-8BA2-4C8E6CD0802A148811infoc",
    "blackside_state": "0",
    "is-2022-channel": "1",
    "buvid4": "7FDFFDBD-4A05-CE5B-36F8-65644EF23BAA01057-022012119-AriTOoXUlusyf%2FPJFVaFQQ%3D%3D",
    "fingerprint3": "a5079b7c6bbff612db4a71d0b5309f09",
    "_uuid": "1895FF54-38108-F76E-425C-67F7D2649F2D79892infoc",
    "b_nut": "100",
    "rpdid": "|(k|ul)))|)J0J'uYY)l~~uku",
    "b_ut": "5",
    "CURRENT_PID": "6064c9b0-cd27-11ed-9166-4964fac53142",
    "nostalgia_conf": "-1",
    "hit-new-style-dyn": "1",
    "hit-dyn-v2": "1",
    "CURRENT_FNVAL": "4048",
    "FEED_LIVE_VERSION": "V8",
    "buvid_fp": "fa328c199106d855c503e19e77cfd2e5",
    "PVID": "5",
    "header_theme_version": "CLOSE",
    "CURRENT_QUALITY": "120",
    "fingerprint": "df225497cabdc8de8b5d4ffa4c5f3b07",
    "home_feed_column": "5",
    "b_lsid": "12946BB1_18A6F60043F",
    "browser_resolution": "1456-797",
    "sid": "4x0efj2f",
    "bp_video_offset_457472714": "838573964930318341"
}

# 循环6次，一共300个视频链接。通过vid可以定位和获取特定的视频资源。
for i in range(6):
    sess = requests.session()
    req = sess.get(url + "&page=" + str(i+1), headers=headers, cookies=cookies)
    res = json.loads(req.text)  #将json字符串response_text解析为一个 Python字典，并将解析后的结果赋值给变量data
    for video in res['data']['result']:
        danmu_list = danmu_list + get_danmu(video['bvid'],headers)

def main():
    create_wordcloud()
    createExcel()
    data_view()

# 当以脚本形式运行时调用主函数
if __name__ == "__main__":
    main()


