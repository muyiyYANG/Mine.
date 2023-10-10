import game_rules
import ai_game
import local_game


def display_menu():
    print("欢迎进入骰子游戏！")
    print("请选择游戏模式：")
    print("1. 人机对战")
    print("2. 本地对战")


def main():
    display_menu()
    choice = input("请输入选项：")

    if choice == "1":
        game_rules.display_game_rules()  # 显示游戏规则
        ai_game.start_ai_game()  # 启动人机对战

    elif choice == "2":
        game_rules.display_game_rules()  # 显示游戏规则
        local_game.start_local_game()  # 启动本地对战

    else:
        print("无效选项！")


if __name__ == "__main__":
    main()
