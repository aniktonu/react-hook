import React from 'react'


export default function footer() {
    return (
        <>

            <div className="container ">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a
                            href="/"
                            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                        >
                            <svg className="bi" width={30} height={24}>
                                <use xlinkHref="#bootstrap" />
                            </svg>
                        </a>
                        <span className="mb-3 mb-md-0 text-muted"><p className="text-primary">© 2022 Anik Hasan Ahmed</p></span>
                    </div>
                </footer>
            </div>


        </>
    )
}
