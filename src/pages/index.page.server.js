export { onBeforeRender }

async function onBeforeRender() {
    let datestrings = [];
    let today = new Date();
    for (let d = 1; d <= 3; d++) {
        let newdate = new Date(today).setDate(-d);
        let datestr = Intl.DateTimeFormat('fi-FI').format(newdate);
        datestrings.push(datestr);
    }

    let pageContext = { pageProps: { dates: datestrings } }

    return { pageContext }
}