function mergeUserData(userData, additionalUserData) {
    return userData.map(function(item, index) {
        additionalItem = additionalUserData.find(function(element) {
            return element.uid === item.uid;
        })
        delete additionalItem.uid;
        return Object.assign({}, item, additionalItem);
    })
}
userData = mergeUserData(personData, additionalPersonData);