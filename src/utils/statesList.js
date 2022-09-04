export const FetchStates = async () => {
    const response = await fetch(
        'https://parseapi.back4app.com/classes/States?order=name&keys=name',
        {
            headers: {
                'X-Parse-Application-Id': '6a2NWTwXRlwc1BynCf46kYZG1VeWp170GYjZIeXK',
                'X-Parse-Master-Key': 'WEYdiGWSz0gt91skfDe03wX9yqikQTpiVc9Vn2An',
            }
        }
    );
    const data = await response.json();
    const states = data.results.map((el) => {
        return el.name
    })

    return { states }
}