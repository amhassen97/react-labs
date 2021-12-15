import React, { useReducer, useRef, useState } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, Form, FormControl, ListGroup } from 'react-bootstrap';
import { uuid } from 'uuidv4';
import { ArrowCounterclockwise, CheckLg, Trash } from 'react-bootstrap-icons';
import Title from './Title';


const initialTodos = [
    { id: uuid(), task: 'Learn React', completed: false },
    { id: uuid(), task: 'Learn Typescript', completed: false },
    { id: uuid(), task: 'Make Wireframes', completed: true },
    { id: uuid(), task: 'Learn CSS', completed: false },
]


const pageTitle = "To-do List";

export const Todo = () => {

    const addTaskRef = useRef(null);

    const [hasValue, setHasValue] = useState(false)



    const toDoReducer = (state, action) => {

        switch (action.type) {
            case "ADD":
                let taskName = addTaskRef.current.value;

                let newState;



                newState = [...state, { id: uuid(), task: taskName, completed: false }];

                // newState = newState.filter((x) => x.task !== "");


                return newState;
                break
            case "UNDO":
                let updateID = action.data;

                let undoState = state.map((x, i) => {
                    console.log('Completed b4: ', x.completed);

                    if (x.id == updateID) {
                        x.completed = false;
                    }

                    return x;
                });

                return undoState

            case "CHECK":
                let checkID = action.data.id;
                let checkVal = action.data.value;

                let checkState = state.map((x, i) => {

                    if (x.id == checkID) {
                        x.completed = checkVal;
                    }


                    return x;
                });

                return checkState

            case "COMPLETE":
                let completeID = action.data;

                let completeState = state.map((x, i) => {

                    if (x.id == completeID) {
                        x.completed = true;
                    }


                    return x;
                });

                return completeState

            case "DELETE":
                let deleteState = state.filter((x) => x.id !== action.data);
                return deleteState;
            default:
                return state;
        }


    }

    const [todoList, dispatchTodo] = useReducer(toDoReducer, initialTodos);

    return (



        <Container fluid>

            <Title title={pageTitle} />

            <Row>
                <Col className='mx-5 my-2'>
                    <Card>
                        <Card.Header><b>To Do App</b></Card.Header>

                        <>
                            <Row className='m-3'>
                                <Col  >
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Add task"
                                            aria-label="Add Task"
                                            aria-describedby="addTaskInput"
                                            ref={addTaskRef}
                                            onInput={(e) => { e.target.value.trim() != '' ? setHasValue(true) : setHasValue(false) }}
                                            required
                                        />
                                    </InputGroup>
                                </Col>
                                <Col sm={1}>
                                    <Button variant="primary" type="button" onClick={(e) => { e.preventDefault(); dispatchTodo({ type: "ADD" }) }} disabled={!hasValue} >
                                        Add task
                                    </Button>
                                </Col>
                            </Row>
                        </>
                        <Row>
                            <Col>
                                <ListGroup className='m-3 text-left'>
                                    {
                                        todoList.map((x, i) =>
                                            <ListGroup.Item key={x.id} className={x.completed == false ? "text-danger" : "text-success"} >

                                                <Row>
                                                    <Col><Form.Check id={x.id} name={x.id} inline onChange={(e) => { dispatchTodo({ type: "CHECK", data: { id: x.id, value: e.target.checked } }) }} ></Form.Check></Col>
                                                    {/* <Col xs={1}>{i + 1}.</Col> */}
                                                    <Col>{x.completed == false ?
                                                        <span>{x.task}</span>
                                                        :
                                                        <del>{x.task}</del>
                                                    }
                                                    </Col>
                                                    {/* <Col xs={1}>
                                                        {x.completed == false ?
                                                            <span title="Mark as completed task.">< CheckLg role="button" color="green" onClick={(e) => { dispatchTodo({ type: "COMPLETE", data: x.id }) }} /></span> :
                                                            <span title="Mark as incomplete task">
                                                                <ArrowCounterclockwise role="button" color='blue' onClick={(e) => { dispatchTodo({ type: "UNDO", data: x.id }) }} />
                                                            </span>
                                                        }
                                                    </Col> */}
                                                    <Col xs={1}>
                                                        {x.completed ?
                                                            <span> </span> : <span title="Delete task" onClick={(e) => { dispatchTodo({ type: "DELETE", data: x.id }) }}>
                                                                <Trash role="button" color='red' />
                                                            </span>
                                                        }
                                                    </Col>


                                                </Row>


                                            </ListGroup.Item>
                                        )
                                    }
                                </ListGroup>
                            </Col>
                        </Row>

                        <Row className='text-center mb-3'>
                            <Col >
                                Completed : <b>{todoList.filter((x) => x.completed == true).length}</b>
                            </Col>
                            <Col  >
                                Outstanding : <b>{todoList.filter((x) => x.completed == false).length}</b>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>


        </Container>

    );
}