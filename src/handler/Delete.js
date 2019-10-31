export default class Delete {
    removeHandler = async (uid) => {
        console.log(uid)
        let remove = await fetch('http://192.168.1.23/users/remove/' + uid, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': TokenStore.getToken()
            },
        });
        let removeJson = await remove.json();
        console.log(removeJson.status)
        if (removeJson.status) {
            alert('Delete Success')
        } else (
            alert('Delete Failed')
        )
    }
}