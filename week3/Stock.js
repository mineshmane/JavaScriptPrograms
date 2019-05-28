class Stock {
    constructor(name, company, symbol, shares, price, totalprice) {
        this.name;
        this.company;
        this.symbol;
        this.shares;
        this.price;
        this.totalprice

    }
    getName() {
        return name;
    }

    setName(name) {
        this.name = name;
    }

    getCompany() {
        return company;
    }

    setCompany(company) {
        this.company = company;
    }

    getSymbol() {
        return symbol;
    }

    setSymbol(symbol) {
        this.symbol = symbol;
    }

    getShares() {
        return shares;
    }

    setShares(shares) {
        this.shares = shares;
    }

    getPrice() {
        return price;
    }

    setPrice(price) {
        this.price = price;
    }

    getTotalprice() {
        return totalprice;
    }

    setTotalprice(totalprice) {
        this.totalprice = totalprice;
    }
}
module.exports={Stock}