const checkDocAvailability = (doc, d) => {
    if (doc.timeSlotsBooked.includes(d.toString())) {
        res.status(400)
        throw new Error("Slot not available")
    }
}

const checkUserAvailability = (user, d) => {
    if (user.userTimeSlot.includes(d.toString())) {
        res.status(400)
        throw new Error("You already have an appointment at that time! Please choose another time!")
    }
}


export {checkDocAvailability, checkUserAvailability};