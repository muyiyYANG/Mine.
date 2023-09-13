import matplotlib.pyplot as plt
import numpy as np
from wordcloud import WordCloud, ImageColorGenerator
from PIL import Image # 导入PIL库用于处理图像

def create_wordcloud():
    # 读取文本文件并将内容存储为一个字符串
    with open('弹幕.txt', 'r', encoding='utf-8') as file:
        text = file.read()

    # 定义形状模板
    mask = np.array(Image.open('词云图背景.jpg'))

    # 创建词云对象并配置参数
    wordcloud = WordCloud(font_path='./fonts/simsun.ttc',
                          background_color='white',
                          width=1000,
                          height=600,
                          collocations=False,
                          contour_color='steelblue', # 设置轮廓颜色
                          contour_width=2, # 设置轮廓线宽度
                          mask=mask, # 使用形状模板
                          max_font_size=150, # 设置最大字体大小
                          min_font_size=10, # 设置最小字体大小
                          ).generate(text)

    # 绘制词云图
    plt.figure(figsize=(10, 7))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.axis('off')

    # 显示词云图
    plt.show()

    # 保存词云图
    wordcloud.to_file('词云图.png')


