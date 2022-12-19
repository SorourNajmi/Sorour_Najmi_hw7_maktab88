function mergeUserData(userData, additionalUserData) {
    if (!Array.isArray(userData) || !Array.isArray(additionalUserData)) {
        console.error("Not an array!");
        return;
    }
    return userData.map(function(item, index) {
        additionalItem = additionalUserData.find(function(element) {
            return element.uid === item.uid;
        })
        return Object.assign({}, item, additionalItem);
    })
}
userData = mergeUserData(personData, additionalPersonData);