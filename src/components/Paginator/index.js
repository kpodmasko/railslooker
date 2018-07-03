import React, { Component } from "react"
import arrow from "../../img/onebit.png"

class Paginator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: [],
            activePage: 0,
            pageCanContain: 0,
            trainsListHeight: 0,

        }
    }

    componentDidMount() {
        this.organizePaginator();
    }

    componentDidUpdate() {
        // this.organizePaginator();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            pages: this.getPages(nextProps.trains)
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.pages !== this.state.pages) {
            return true;
        }

        if (nextState.activePage !== this.state.activePage) {
            return true;
        }

        return false;
    }

    render() {

        return (
            <div>
                <div className="paginator">
                   { this.state.pages[this.state.activePage] }
                </div>
                <div className="TrainsList__footer col-xs-12">
                    <div className="col-xs-2 tac" onClick={() => {
                        this.setState({
                            ...this.state,
                            activePage: (this.state.pages[this.state.activePage - 1]) ?
                                this.state.activePage - 1 :
                                this.state.activePage
                        });
                    }}><img src={arrow} alt="<-"/></div>
                    <div className="col-xs-offset-1 col-xs-6 tac">
                        { this.state.activePage + 1 } из { this.state.pages.length || 1 }
                    </div>
                    <div className="col-xs-offset-1 col-xs-2 tac" onClick={() => {
                        this.setState({
                            ...this.state,
                            activePage: (this.state.pages[this.state.activePage + 1]) ?
                                this.state.activePage + 1 :
                                this.state.activePage
                        });
                    }}><img src={arrow} alt="->" className="trans"/></div>
                </div>
            </div>
        );
    }

    organizePaginator = () => {
        const trainsListHeight = document.querySelector(".TrainsList").scrollHeight;
        const trainsHeaderHeight = document.querySelector(".TrainsList__header").scrollHeight;
        const trainsFooterHeight = document.querySelector(".TrainsList__footer").scrollHeight;
        const oneItemHeight = document.querySelector(".TrainsList__item").scrollHeight;
        // eslint-disable-next-line
        const pageCanContain = parseInt(((trainsListHeight - trainsHeaderHeight - trainsFooterHeight) / oneItemHeight) + "");
        const newTrainsFooterHeight = trainsListHeight - trainsHeaderHeight - oneItemHeight * pageCanContain;

        document.querySelector(".TrainsList__footer").setAttribute("style", `height: ${ newTrainsFooterHeight }px;
        line-height: ${ newTrainsFooterHeight }px;`);

        this.setState({
            ...this.state,
            pageCanContain: pageCanContain
        })
    };

    getPages = trains => {
        if (!trains || !this.state.pageCanContain) {
            return [];
        }

        const pages = [];
        const page = [];

        trains.forEach( train => {
            if (page.length < this.state.pageCanContain) {
                page.push(train);
            } else {
                pages.push([...page]);
                page.length = 0;
                page.push(train);
            }
        });

        if (page.length) {
            pages.push([...page]);
        }

        return pages;
    }
}

export default Paginator;