/*
https://www.codewars.com/kata/pyramid-slide-down/train/javascript


Lyrics...

Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

   /3/
  \7\ 4 
 2 \4\ 6 
8 5 \9\ 3

Here comes the task...

Let's say that the 'slide down' is a sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

Your task is to write a function longestSlideDown (in ruby: longest_slide_down) that takes a pyramid representation as argument and returns its' longest 'slide down'. For example,

longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]) => 23

By the way...

My tests include some extraordinarily high pyramides so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

(c) This task is a lyrical version of the Problem 18 and/or Problem 67 on ProjectEuler.
*/

function longestSlideDown(pyramid) {
    function nanToZero(number) {
        return isNaN(number) ? 0 : number;
    }
    function check(y, x) {
        /*
        Проверяем сумму правого/левого элемента, до которых мы можем дотянуться, 
        в совокупности с элементами, до которых достают они. 
        */
        let left, right;
        
        if (y < pyramid.length - 1) {

            let left1 = pyramid[y][x] + pyramid[y + 1][x],
                left2 = pyramid[y][x] + pyramid[y + 1][x + 1],
                right1 = pyramid[y][x + 1] + pyramid[y + 1][x + 1],
                right2 = pyramid[y][x + 1] + pyramid[y + 1][x + 2];

            left1 = nanToZero(left1);
            left2 = nanToZero(left2);
            right1 = nanToZero(right1);
            right2 = nanToZero(right2);

            left = Math.max(left1,left2);
            right = Math.max(right1,right2);

        } else {
            left = pyramid[y][x]
            right = pyramid[y][x + 1]
        }
        return left >= right
    }

    let x = 0,
        sum = pyramid[0][0]
    for (let y = 1; y < pyramid.length; y++) {
        if (check(y, x)) {
            sum += pyramid[y][x]
        } else {
            sum += pyramid[y][x + 1]
            x++;
        }
    }
    return sum
}