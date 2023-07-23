export function AgeCalculator(currentDates: string, dateOfBirths: string) {

    const currentDate = new Date(currentDates);
    const dateOfBirth = new Date(dateOfBirths);

    if (dateOfBirth.toISOString().slice(0, 10) == currentDate.toISOString().slice(0, 10)) {
        return { years: 0, months: 0, days: 0, timeDiff: 0};
    }

    const timeDiff = currentDate.getTime() - dateOfBirth.getTime();

    // Yıl hesaplaması
    let years = currentDate.getFullYear() - dateOfBirth.getFullYear();

    // Ay hesaplaması
    let months = currentDate.getMonth() - dateOfBirth.getMonth();
    if (months < 0) {
        years--;
        months += 12;
    }

    // Gün hesaplaması
    let days = currentDate.getDate() - dateOfBirth.getDate();
    if (days < 0) {
        months--;
        const tempDate = new Date(dateOfBirth.getFullYear(), dateOfBirth.getMonth() + 1, 0);
        days += tempDate.getDate();
    }

    return { years, months, days, timeDiff};
}
