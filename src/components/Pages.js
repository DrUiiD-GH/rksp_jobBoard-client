import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {vacancy} = useContext(Context)
    const pageCount = Math.ceil(vacancy.totalCount / vacancy.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }

    
    return (
        <Pagination size={"lg"} className="mt-2 mb-5">
            {pages.map(page=>
                <Pagination.Item
                    key={page}
                    active={vacancy.page === page}
                    onClick={()=>vacancy.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;