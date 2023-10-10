import random
from game_rules import check_score

def roll_dice(num_dice):
    dice = []
    for _ in range(num_dice):
        dice.append(random.randint(1, 6))
    return dice

class Player:
    def __init__(self, name, chips=100):
        self.name = name  # 玩家姓名
        self.chips = chips  # 筹码数量
        self.dice = []  # 投掷的骰子
        self.locked_dice = []  # 锁定的骰子
        self.multiplier = 1  # 倍率
        self.total_score = 0  # 总得分

    def reset(self):
        self.dice.clear()
        self.locked_dice.clear()
        self.multiplier = 1

    def roll_dice(self, num_dice):
        self.dice = random.choices(range(1, 7), k=num_dice)

    def choose_locked_dice(self, roll, dice_indexes=[]):
        if not dice_indexes:
            self.locked_dice.clear()  # 清除上轮锁定的骰子
        self.locked_dice.extend([self.dice[i - 1] for i in dice_indexes])

    def choose_multiplier(self, roll, multiplier):
        self.multiplier = multiplier

    def calculate_total_score(self):
        self.total_score += self.chips


class HumanPlayer(Player):
    def __init__(self, name, chips):
        super().__init__(name, chips)

    def choose_multiplier(self, multiplier):
        print(f"选择倍率：{multiplier}")
        self.multiplier = multiplier
        score = check_score(self.dice + self.locked_dice)
        print(f"本轮得分：{score * self.multiplier}")

    def choose_locked_dice(self, indexes):
        print(f"选择锁定的骰子索引：{indexes}")
        self.locked_dice = [self.dice[index - 1] for index in indexes]
        num_unlocked_dice = 5 - len(self.locked_dice)
        self.dice = roll_dice(num_unlocked_dice)
        print(f"重新投掷骰子结果：{self.dice}")

class AIPlayer(Player):
    def play(self, dice_results):
        print("AI投掷骰子...")
        print("AI骰子结果：{}".format(dice_results))
        scores = []  # 存储每种选择的得分

        # 遍历所有可能的选择
        for locked_indices in range(len(dice_results) + 1):
            # 投掷未锁定的骰子
            new_dice_results = [random.randint(1, 6) if i not in locked_indices else dice_results[i] for i in range(len(dice_results))]

            # 计算当前选择的得分
            score = check_score(new_dice_results)
            scores.append(score)

        # 选择得分最高的选择
        best_choice = max(range(len(scores)), key=lambda x: scores[x])

        print("锁定骰子数：{}，锁定骰子结果：{}，倍率：{}".format(best_choice, [dice_results[i] for i in range(best_choice)], self.multiplier))

        # 根据选择更新状态
        if best_choice == 0:
            self.multiplier = random.choice([1, 2, 3, 4, 5, 6])
            self.locked_dice.clear()
        else:
            self.multiplier = 1
            self.locked_dice = [dice_results[i] for i in range(best_choice)]

        print("重新掷骰子结果：{}".format([new_dice_results[i] for i in range(len(new_dice_results)) if i not in self.locked_dice]))
        self.update_score(new_dice_results)  # 更新玩家分数

        print("AI本轮得分：{}，当前总分：{}".format(scores[best_choice], self.score))
        print()


    def choose_multiplier(self, multiplier):
        if multiplier == 0:
            # 随机选择一个非零倍率
            multiplier = random.choice([1, 2, 3, 4, 5, 6])

        self.multiplier = multiplier