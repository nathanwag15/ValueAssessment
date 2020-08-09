import sys
import time

values = (
    "Accountability Achievement Adventure Assertiveness Authenticity Authority Balance Beauty Career Caring Challenge "
    "Compassion Connection Contribution Cooperation Courage Creativity Curiosity Efficiency Encouragement Equality "
    "Excitement Faith Fitness Flexibility Freedom Friendliness Forgiveness Fun Generosity Gratitude Honesty Humility "
    "Independence Integrity Intimacy Justice Kindness Learning Legacy Loyalty Love Mindfulness Organized "
    "Open-mindedness "
    "Passion Patience Persistence Quality Recognition Respect Risk-Taking Romance Safety Self-awareness "
    "Self-development "
    "Self-control Sensuality Skillfulness Spirituality Supportive Trust Urgency Wealth").split()
values_num = [0] * len(values)
d_answers = {}


def win_7(input_list):
    count_win = [0] * 7
    if len(input_list) == 7:
        print("Starting to order your top 7 ideals\n")
        for i in range(len(input_list)):
            for j in range(i+1, len(input_list)):
                if f"{input_list[i]}(0) or {input_list[j]}(1): " not in d_answers:
                    answer = input(f"{input_list[i]}(0) or {input_list[j]}(1): ").strip()
                    while answer not in ["0", "1"]:
                        answer = input(f"(Only input '0' or '1') - {input_list[i]}(0) or {input_list[j]}(1): ").strip()
                    d_answers[f"{input_list[i]}(0) or {input_list[j]}(1): "] = answer
                    if answer == "1":
                        d_answers[f"{input_list[j]}(0) or {input_list[i]}(1): "] = "0"
                    elif answer == "0":
                        d_answers[f"{input_list[j]}(0) or {input_list[i]}(1): "] = "1"

                elif f"{input_list[i]}(0) or {input_list[j]}(1): " in d_answers:
                    answer = d_answers[f"{input_list[i]}(0) or {input_list[j]}(1): "]

                    # TODO: delete print for user, this is done in background
                    print(f"{input_list[i]}(0) or {input_list[j]}(1): {answer}")

                if answer == "1":
                    count_win[i] += 1
                elif answer == "0":
                    count_win[j] += 1

        count_win, input_list = (list(i) for i in zip(*sorted(zip(count_win, input_list))))
        print("\nTop 7:\n")
        for i in range(len(input_list)):
            print(f"\t{i + 1}: {input_list[i]}")
        sys.exit()


def all_num(input_list, key):
    list_of_num = []
    for i in range(len(input_list)):
        if values_num[i] == key:
            list_of_num.append(values[i])
    return list_of_num


def main():
    # TODO: uncomment times for user
    print("\nFor each value listed, select the way you feel about that value. Quickly respond and go with your gut.")
    # time.sleep(3)
    print("\nDo not base your decision on what others or society thinks about the value.\n")
    # time.sleep(3)
    print("Do not choose based on how you feel you are currently acting when it comes to that value.\n")
    # time.sleep(3)
    print("Base your decision on the true feelings and intentions in your heart and mind. What is your natural "
          "tendency?\n")
    # time.sleep(4)
    print("Be honest in order to get the results you desire. There are no right or wrong answers.\n")
    # time.sleep(3)
    print("For the following enter a number 1-5. 5 being most important. 1 being the least important.")
    # time.sleep(5)
    for j in range(len(values)):
        print()
        print(values[j])
        values_num[j] = input("Enter a number 1-5: ").strip()
        while values_num[j] not in [i for i in "12345"]:     # ["1", "2", "3", "4", "5"]
            values_num[j] = input("Only enter a number 1-5: ").strip()
        values_num[j] = int(values_num[j])

    main_list = all_num(values, 5)

    while len(main_list) < 7:
        for j in range(4, 0, -1):
            add_list = []
            add_list = all_num(values, j)
            main_list += add_list
            if len(main_list) >= 7:
                break

    print("\nThe next questions will give 2 values. Choose the value that is more important to you."
          "'0' being the left value is more important than the right or"
          " '1' the right value is more important then the left.\n")
    # TODO: uncomment times
    # time.sleep(5)

    # keeps lowering list of values until down to 7 values. Then moves on to win_7.
    while True:
        main_list = [i for i in find_ideals(main_list)]


def find_ideals(input_list):
    win_7(input_list)
    check_again = []

    # TODO: For testing
    # print(input_list)

    # find more values if list is less than 7
    while len(check_again) < 7:
        count_list = [0 for z in input_list]
        # check first value to rest
        if len(check_again) != 7:
            for j in range(1, len(input_list)):
                if f"{input_list[0]}(0) or {input_list[j]}(1): " not in d_answers:
                    answer = input(f"{input_list[0]}(0) or {input_list[j]}(1): ").strip()
                    while answer not in ["0", "1"]:
                        answer = input(f"(Only answer '0' or '1') - {input_list[0]}(0) or {input_list[j]}(1): ").strip()
                    d_answers[f"{input_list[0]}(0) or {input_list[j]}(1): "] = answer
                    if answer == "1":
                        d_answers[f"{input_list[j]}(0) or {input_list[0]}(1): "] = "0"
                    elif answer == "0":
                        d_answers[f"{input_list[j]}(0) or {input_list[0]}(1): "] = "1"

                elif f"{input_list[0]}(0) or {input_list[j]}(1): " in d_answers:
                    answer = d_answers[f"{input_list[0]}(0) or {input_list[j]}(1): "]
                    # TODO: delete print for user, this is done in background
                    print(f"{input_list[0]}(0) or {input_list[j]}(1): {answer}")

                if answer == "1":
                    count_list[0] += 1
                elif answer == "0":
                    count_list[j] += 1

        # TODO: These are for testing
        #print(f'input_list 1st = {input_list}')

        # first if it got < 7 and it's less than or equal to all the rest
        if count_list[0] < 7 and all([count_list[0] <= i for i in count_list[1:]]):
            check_again.append(input_list.pop(0))
            count_list.pop(0)

        # TODO: These are for testing
        # print(f'check_again = {check_again}')
        # print(f'count_list = {count_list}')
        # print(f'input_list = {input_list}')

        if not all([i == 0 for i in count_list]):
            # take all values that got zero
            restart = True
            while restart:
                restart = False
                for k in range(len(input_list)):
                    if count_list[k] == 0:
                        check_again.append(input_list.pop(k))
                        count_list.pop(k)
                        restart = True
                        break

        # don't try to sort if it's empty
        if len(check_again) != 0:
            check_again.sort()

        # TODO: These are for testing
        # print(f'input_list after removing = {input_list}')
        # print(f'check_again after adding = {check_again}')

    return check_again

# comment out for testing
if __name__ == '__main__':
    main()


# TODO: These are testings
test8Values = ["Accountability", "Achievement", "Adventure", "Assertiveness", "Authenticity", "Authority", "Balance", "Beauty"]
testTest = ['Achievement', 'Creativity', 'Excitement', 'Fun', 'Justice', 'Learning', 'Legacy', 'Passion', 'Self-development']
while True:
    testTest = [i for i in find_ideals(testTest)]