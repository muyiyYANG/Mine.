def display_game_rules():
    print("游戏规则：")
    print("在每轮游戏中，玩家通过投掷骰子获得点数，然后根据点数进行决策。")
    print("玩家可以选择锁定其中的骰子，继续投掷未锁定的骰子，并根据新的点数进行决策。")
    print("游戏的目标是获得尽可能高的总点数，在规定的回合数内与对手进行比较。")

def count_dice_frequency(dice):
    frequency_dict = {}
    for i in dice:
        if i in frequency_dict:
            frequency_dict[i] += 1
        else:
            frequency_dict[i] = 1
    return frequency_dict


def check_score(dice):
    freq = count_dice_frequency(dice)
    total_score = sum(dice)  # 基础得分为骰子点数的总和
    bonus_score = 0  # 初始化奖励分为0

    if len(freq) == 2 and any(v == 2 for v in freq.values()):  # 双对
        bonus_score = 10
    elif len(freq) == 3 and max(freq.values()) == 3:  # 三连
        bonus_score = 10
    elif len(freq) == 2 and any(v == 3 for v in freq.values()):  # 葫芦
        bonus_score = 20
    elif len(freq) == 1 and dice.count(dice[0]) == 4:  # 四连
        bonus_score = 40
    elif len(freq) == 1 and dice.count(dice[0]) == 5:  # 五连
        bonus_score = 100
    elif sorted(dice) in [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]]:  # 小顺子
        bonus_score = 30
    elif sorted(dice) in [[1, 2, 3, 4, 5], [2, 3, 4, 5, 6]]:  # 大顺子
        bonus_score = 60

    return total_score + bonus_score