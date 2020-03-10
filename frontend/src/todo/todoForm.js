import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { changeDescription, search, add, clear } from "./todoActions";

const TodoForm = props => {
    function keyHandler(e) {
        const { add, search, description, clear } = props;
        if (e.key === "Enter") {
            e.shiftKey ? search() : add(description);
        } else if (e.key === "Escape") {
            clear();
        }
    }

    useEffect(() => {
        props.search();
    }, []);

    const { add, search, description } = props;
    return (
        <div role="form" className="todoForm">
            <div className="row">
                <Grid cols="12 8 9 10">
                    <input
                        id="description"
                        className="form-control"
                        placeholder="Adicione uma tarefa"
                        onChange={props.changeDescription}
                        onKeyUp={keyHandler}
                        value={props.description}
                    ></input>
                </Grid>
                <Grid cols="12 4 3 2">
                    <IconButton
                        style="primary"
                        icon="plus"
                        onClick={() => add(description)}
                    ></IconButton>
                    <IconButton
                        style="info"
                        icon="search"
                        onClick={search}
                    ></IconButton>
                    <IconButton
                        style="default"
                        icon="close"
                        onClick={props.clear}
                    ></IconButton>
                </Grid>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, search, add, clear }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
