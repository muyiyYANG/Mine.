import random

from game_rules import check_score
from player import HumanPlayer, AIPlayer


MIN_CHIPS = 0
MAX_ROLLS = 3
TOTAL_SCORE = 100
MULTIPLIER_RANGE = range(1, 4)
INVALID_INPUT_MSG = "输入无效，请重新输入！"


def start_ai_game():
    while True:
        try:
            total_rounds = int(input("请输入游戏局数："))
            if total_rounds <= 0:
                print(INVALID_INPUT_MSG)
                continue
            break
        except ValueError:
            print(INVALID_INPUT_MSG)

    player_name = input("请输入玩家姓名：")

    players = [
        HumanPlayer(player_name, TOTAL_SCORE),
        AIPlayer("AI")
    ]

    current_round = 0
    while current_round < total_rounds and all(player.chips > MIN_CHIPS for player in players):
        current_round += 1
        remaining_rounds = total_rounds - current_round + 1

        print(f"\n第{current_round}轮游戏开始！")
        print(f"当前轮数：{current_round}，总局数：{total_rounds}，剩余局数：{remaining_rounds}")

        for i, player in enumerate(players):
            player.reset()  # 开始新一轮游戏，重置玩家状态
            print(f"\n{player.name}投掷骰子...")
            player.roll_dice(5)
            print(f"{player.name}骰子结果：{player.dice}")

            for roll in range(MAX_ROLLS):
                if isinstance(player, HumanPlayer):
                    while True:
                        decision_input = input("请选择要锁定的骰子（输入数字，用空格隔开；如不锁定任何骰子，请直接按Enter键）：")
                        locked_dice = [int(dice) for dice in decision_input.split()] if decision_input != "" else []
                        if all(1 <= dice <= 5 for dice in locked_dice):
                            break
                        else:
                            print(INVALID_INPUT_MSG)

                    while True:
                        multiplier_input = input("请选择倍率（输入数字1-3，不输入则默认为1）：")
                        multiplier = int(multiplier_input) if multiplier_input != "" else 1
                        if multiplier in MULTIPLIER_RANGE:
                            break
                        else:
                            print(INVALID_INPUT_MSG)
                else:  # AI玩家随机选择
                    locked_dice = random.sample(range(5), random.randint(0, 4))
                    multiplier = random.choice(MULTIPLIER_RANGE)

                player.choose_locked_dice(locked_dice)
                player.choose_multiplier(multiplier)
                print(
                    f"锁定骰子数：{len(player.locked_dice)}，锁定骰子结果：{player.locked_dice}，倍率：{player.multiplier}")

                if len(locked_dice) == 5:  # 如果锁定了所有骰子，则不需要进行重新掷骰子
                    break

                player.roll_dice(5 - len(locked_dice))  # 继续掷剩余的骰子
                print(f"重新掷骰子结果：{player.dice}")

            score = check_score(player.dice + player.locked_dice)
            player.chips += score * player.multiplier
            player.multiplier += 1  # 倍率递增
            print(f"{player.name}本轮得分：{score}，当前总分：{player.chips}")

            if i < len(players) - 1:  # 对于非最后一个玩家，等待其回合结束后才进行下一位玩家的操作
                input(f"\n请按Enter键继续下一个玩家的操作...")

        print("\n当前各玩家筹码数：")
        for player in players:
            print(f"{player.name}: {player.chips}")

    print("\n游戏结束！")

    max_chips = max(player.chips for player in players)
    winners = [player for player in players if player.chips == max_chips]
    if len(winners) == 1:
        print(f"获胜者：{winners[0].name}，最终得分：{winners[0].chips}")
    else:
        print("本轮游戏平局！")
        print("获胜者为：")
        for winner in winners:
            print(f"{winner.name}，最终得分：{winner.chips}")

    print("\n各玩家最终得分：")
    for player in players:
        print(f"{player.name}: {player.chips}")


if __name__ == '__main__':
    start_ai_game()
