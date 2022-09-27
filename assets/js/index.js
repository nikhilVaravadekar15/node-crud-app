const add_user = document.getElementById("add_user")
const update_user = document.getElementById("update_user")

function showMessage(message) {
    alert(message)
}

if (add_user) {
    add_user.addEventListener("submit", () => {
        alert("Data Inserted Successfully!");
    })
}

if (update_user) {
    update_user.addEventListener("click", async (event) => {
        event.preventDefault()
        let data = {}
        const form_data = new FormData(update_user)
        for (let [key, value] of form_data) {
            data[key] = value
        }

        try {
            let response = await fetch(`http://localhost:3000/api/user/${data[id]}`, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json()
            showMessage(response.status == 200 ? "User data updated successfully!" : 'Some error occurred while updating the user information')
        } catch (error) {
            showMessage('Some error occurred while updating the user information')
        }
    })
}


if (window.location.pathname == "/") {
    const rows = document.querySelectorAll(".delete")

    for (let index = 0; index < rows.length; index++) {
        const row = rows[index];
        row.addEventListener("click", async (event) => {
            event.preventDefault()
            if (confirm("Do you really want to delete this record?")) {
                const id = row.getAttribute("data-id")
                document.getElementById(id).classList.add("delete")

                try {
                    let response = await fetch(`http://localhost:3000/api/user/${id}`, {
                        method: "DELETE"
                    });
                    const result = await response.json()
                    showMessage(response.status == 200 ? "User delete successfully!" : 'Some error occurred while deleting the user')
                    location.reload()
                } catch (error) {
                    showMessage('Some error occurred while deleting the user')
                }
            }
        })

    }
}
