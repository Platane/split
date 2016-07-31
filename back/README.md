


# entities

```
room : {
    name,
    slug,
    pic,
    password,
}


user : {
    name,
    pic,
}


expense : {
    title,
    amount,
    currency,
    date,
    from : <user id>,
    to   : <user id>[],

    pic,
    detail,
    proof,
}

```
