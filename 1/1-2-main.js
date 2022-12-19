function read(dataArr) {
    if (!Array.isArray(dataArr)) {
        console.error("Not an array!");
        return;
    }
    console.log(dataArr);
}
read(userData);

function create(dataObj) {
    if (typeof dataObj !== 'object') {
        console.error("Not an object!");
        return;
    }
    const isSimilar = !userData.every(function(item) {
        return item.uid !== dataObj.uid;
    });
    if (isSimilar) {
        console.error("Duplicate uid! Cannot create!");
        return;
    }
    let flag = false;
    // با ایجاد فلگ اجازه می دهیم تمام خصوصیاتی که وجود ندارند به اطلاع کاربر برسد سپس از فانکشن خارج شود
    for (const key of Object.keys(userData[0])) {
        if (!Object.keys(dataObj).includes(key)) {
            console.log(`Property(${key}) is missing!`);
            flag = true;
        }
    }
    if (flag) return;
    userData.push(dataObj);
    console.info("Successfully created!");
}
// create({
//     uid: 7,
//     firstName: 'Karim',
//     lastName: 'Khani',
//     position: 'CEO',
//     city: 'Mashhad',
// });

// create({
//     uid: 8,
//     firstName: 'Karim',
//     lastName: 'Khani',
// });

// create({
//     uid: 4,
//     firstName: 'Mohammad',
//     lastName: 'Fakhrayi',
//     position: 'QA Engineer',
//     city: 'Isfahan',
// });

function update(dataObj) {
    if (typeof dataObj !== 'object') {
        console.error("Not an object!");
        return;
    }
    let newItem = userData.find(function(item) {
        return item.uid === dataObj.uid;
    });
    if (newItem === undefined) {
        console.error("Not existing! Cannot update!");
        return;
    }
    for (const key in dataObj) {
        newItem[key] = dataObj[key];
    }
    console.info("Successfully updated!");
}
// update({uid:7, firstName:'Karim', lastName:'Khanipour',position:'CEO', city:'Mashhad', age:37});

// update({uid:9, firstName:'Karim', lastName:'Khanipour',position:'CEO', city:'Mashhad', age:37});

function remove(id) {
    if (isNaN(id)) {
        console.error("Not a number!");
        return;
    }
    id = +id;
    const index = userData.findIndex(function(item) {
        return item.uid === id;
    })
    if (index === -1) {
        console.error("Not existing! Cannot Remove!");
        return;
    }
    userData.splice(index, 1);
    console.info("Successfully removed!");
}
// remove(2);

// remove(12);