export const nextBirthday = (dateOfBirth: string) => {
    // Kullanıcıdan doğum gününü al
    const userBirthday = new Date(dateOfBirth);

    // Şu anki tarihi al
    const currentDate = new Date();

    let remainingMonths = userBirthday.getMonth() - currentDate.getMonth();
    let remainingDays = userBirthday.getDate() - currentDate.getDate();

    if (remainingMonths < 0) {
        remainingMonths += 12;
    }

    if (remainingDays < 0) {
        const tempDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        remainingDays += tempDate.getDate();
        // remainingMonths--;
    }
    return { remainingMonths, remainingDays }
}