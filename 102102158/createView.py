import pandas as pd
import matplotlib.pyplot as plt

def data_view():  #数据可视化
    # 读取 Excel 文件
    data = pd.read_excel('弹幕.xlsx')
    # 提取弹幕和数量列
    danmu = data['弹幕']
    quantity = data['数量']
    # 设置中文字体
    plt.rcParams['font.family'] = ['SimHei']
    # 绘制直方图
    plt.bar(danmu, quantity)
    # 设置图形标题和x/y轴标签
    plt.title('弹幕数量分布')
    plt.xlabel('弹幕')
    plt.ylabel('数量')
    # 自动调整x轴标签的旋转角度，使其更易读
    plt.xticks(rotation=90)
    # 保存为图片
    plt.savefig('弹幕数量分布直方图.png')
    # 显示图形
    plt.show()

