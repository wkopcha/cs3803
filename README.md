# cstc-3803

The CSTC-3803 static instructional website

# Adding a Resource to the Resource Page
Just add an entry to the `resources` object in `/resources/index.html`. The key should be the text you want the link to display as (to include spaces, wrap the key in quotes), the value should be the link itself.

# Adding an Instructional

1) Add the instructional name to `Lessons.list` in `/assets/lessons.js`. This list is stored in the order of the instructionals as well
2) Duplicate the folder "template" in `/lessons` and rename it to the lesson number (count starts at 1)
3) Modify `/lessons/{your lesson number}/index.html`, replacing both `LESSON_TITLE`s with the title of the lesson and both `LESSON_ID`s with the lesson number. Edit the contents of the HTML in the `div.content` element to be the written version of the lesson
4) Add the video to `/assets/videos` as `{your lesson number}.mp4` (e.g. Lesson 1 will have a video at `/assets/videos/1.mp4`)
5) Modify `/lessons/{your lesson number}/quiz/index.html`, replacing both `LESSON_TITLE`s with the title of the lesson and both `LESSON_ID`s with the lesson number. Edit the contents of the array in the script tag following the quiz data structure pattern

# Quiz Data Structure Pattern

For generating quizzes, the `Quiz.create()` function takes a lesson id and an array of quiz questions. Each element in the array corresponds with 1 question and follows one of the following formats:

```js
{
    q: 'The Question Being Asked',
    t: Quiz.MultipleChoice,
    a: 0, // This value is the index to the correct element in the o property
    o: ['Option 1', 'Option 2', 'Option 3']
}

{
    q: 'The Question Being Asked',
    t: Quiz.DropDown,
    a: 0, // This value is the index to the correct element in the o property
    o: ['Option 1', 'Option 2', 'Option 3']
}

{
    q: 'The Question Being Asked',
    t: Quiz.FillIn,
    a: 'The correct answer' // Input must match this to be correct, case insensitive
}
```

# TODO
- [x] Videos
  - [x] 1 - What is Multithreading?
  - [x] 2 - Multithreading in Java Basics
  - [x] 3 - Thread Lifecycle in Java
  - [x] 4 - Interthread Communication
  - [x] 5 - The Producer Consumer Problem
- [x] Written Pages
  - [x] 1 - What is Multithreading?
  - [x] 2 - Multithreading in Java Basics
  - [x] 3 - Thread Lifecycle in Java
  - [x] 4 - Interthread Communication
  - [x] 5 - The Producer Consumer Problem
- [x] Quizzes
  - [x] 1 - What is Multithreading?
  - [x] 2 - Multithreading in Java Basics
  - [x] 3 - Thread Lifecycle in Java
  - [x] 4 - Interthread Communication
  - [x] 5 - The Producer Consumer Problem