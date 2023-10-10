from player import HumanPlayer, roll_dice

def start_local_game():
    # 初始化游戏
    total_rounds = 3
    current_round = 1

    player1_chips = int(input("请输入玩家1的初始筹码数量："))
    player2_chips = int(input("请输入玩家2的初始筹码数量："))

    # 创建玩家对象（玩家1，玩家2）
    player1 = HumanPlayer("玩家1", player1_chips)
    player2 = HumanPlayer("玩家2", player2_chips)

    while current_round <= total_rounds:
        print(f"\n第{current_round}轮游戏开始！")

        # 玩家1投掷骰子
        print("\n玩家1投掷骰子...")
        player1.dice = roll_dice(5)
        print(f"玩家1的骰子点数：{player1.dice}")
        player1_score = sum(player1.dice)
        print(f"玩家1的得分：{player1_score}")

        # 玩家1选择要锁定的骰子
        print("玩家1选择要锁定的骰子（用空格分隔编号），不选则输入空格：")
        locked_dice = input().split()
        if not locked_dice:
            player1.locked_dice = [1] * len(player1.dice)
        else:
            player1.locked_dice = [player1.dice[int(num) - 1] for num in locked_dice]
        print(f"玩家1选择锁定的骰子：{player1.locked_dice}")

        # 玩家1选择倍率
        print("玩家1选择倍率（1, 2, 3），不选则默认为1：")
        multiplier = int(input() or "1")  # 如果输入为空，则默认为1
        player1.multiplier = multiplier
        print(f"玩家1选择的倍率：{multiplier}")

        # 玩家2投掷骰子
        print("\n玩家2投掷骰子...")
        player2.dice = roll_dice(5)
        print(f"玩家2的骰子点数：{player2.dice}")
        player2_score = sum(player2.dice)
        print(f"玩家2的得分：{player2_score}")

        # 玩家2选择要锁定的骰子
        print("玩家2选择要锁定的骰子（用空格分隔编号），不选则输入空格：")
        locked_dice = input().split()
        if not locked_dice:
            player2.locked_dice = [1] * len(player2.dice)
        else:
            player2.locked_dice = [player2.dice[int(num) - 1] for num in locked_dice]
        print(f"玩家2选择锁定的骰子：{player2.locked_dice}")

        # 玩家2选择倍率
        print("玩家2选择倍率（1, 2, 3），不选则默认为1：")
        multiplier = int(input() or "1")  # 如果输入为空，则默认为1
        player2.multiplier = multiplier
        print(f"玩家2选择的倍率：{multiplier}")

        # 更新玩家得分
        player1.chips += player1_score * player1.multiplier
        player2.chips += player2_score * player2.multiplier

        # 判断游戏是否结束
        if current_round == total_rounds:
            print("\n游戏结束！")
            break

        current_round += 1

    # 显示最终结果
    print(f"\n玩家1的最终得分：{player1.chips}")
    print(f"玩家2的最终得分：{player2.chips}")
