export const nextBirthday = (dateOfBirthString: string) => {
    // Kullanıcıdan doğum gününü al
    const currentDate = new Date();
    const dateOfBirth = new Date(dateOfBirthString)

    // Doğum tarihine kalan süreyi hesapla
    let remainingMonths = currentDate.getMonth() - dateOfBirth.getMonth();
    let remainingDays = currentDate.getDate() - dateOfBirth.getDate();
    
    if (remainingMonths == 0 && remainingDays < 0) {
        return { remainingMonths, remainingDays: remainingDays * -1 }
    }

    if (remainingMonths < 0 && remainingDays > 0) {
        const tempDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
        return { remainingMonths: (remainingMonths + 1) * -1 , remainingDays: tempDate.getDate() - remainingDays }
    }

    if (remainingMonths > 0 && remainingDays < 0) {
        return { remainingMonths: 12 - remainingMonths, remainingDays: remainingDays * -1 }
    }

    if (remainingMonths > 0 && remainingDays > 0) {
        return { remainingMonths: 11 - remainingMonths, remainingDays: 31 - remainingDays }
    }

    if (remainingMonths > 0 && remainingDays < 0) {
        return { remainingMonths, remainingDays: remainingDays * -1 }
    }

    if (remainingMonths < 0 && remainingDays < 0) {
        return { remainingMonths: remainingMonths * -1, remainingDays: remainingDays * -1 }
    }

    return { remainingMonths, remainingDays }
}