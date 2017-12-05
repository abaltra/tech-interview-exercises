/*
We have a digested server log with username, visited page and timestamp. Create a processing algorithm that will output the most visited page/areas in such a way that will match partial path as well.
i.e.
{
    { user: "user1", page="/home" },
    { user: "user1", page="/home/account" },
    { user: "user1", page="/home/account/profile" },
    { user: "user1", page="/home/account/login" },
    { user: "user2", page="/about" },
    { user: "user2", page="/about/contact" },
    { user: "user2", page="/home" }
}

the output
user1
     - home/account
     - home
user2
     - /about
*/
