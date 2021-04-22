import React from 'react';
import Slide from 'react-reveal/Slide';

import styles from './NavMain.module.scss';

import { useMenuContext } from '../../contexts';
import { _cls } from '../../utils';
import navData from '../../data/nav';

const NavMain = ({}) => {
    const navOpen = true;
    const { navState, collapseMenu } = useMenuContext()
    
    return <>
        <Slide bottom duration={500}>
            <div className={ styles.wrapper }>
                <div className={ _cls(styles.bar, navState && styles.openState) }>
                    <div className={ styles.crumbs }>
                        <a href="/">Home</a>
                    </div>
                    <div className={ styles.crumbs }>
                        <button onClick={ collapseMenu } className={ _cls('label font-bold', styles.barToggle)}>menu</button>
                    </div>
                </div>
            </div>
        </Slide>
        <div className={ _cls(styles.navScreen, navState && styles.openState) }>
            <div className="container">
                <div className="grid grid-cols-12">
                    
                    <div className="col-span-4">
                        <div className="mb-12">
                            <h6 className="mb-6">Contact details</h6>
                            <ul>
                                { navData.contactDetails.map(({ label, url }, index) => 
                                    <li key={ index }><a href={ url }>{ label }</a></li>
                                )}
                            </ul>
                        </div>
                        <h6 className="mb-6">Follow me</h6>
                        <ul>
                            { navData.socials.map(({ label, url }, index) => 
                                <li key={ index }><a href={ url }>{ label }</a></li>
                            )}
                        </ul>
                    </div>
                    
                    <div className="col-span-8">
                        <h6 className="mb-10">Where do you want to go</h6>
                        <ul className={ _cls('grid grid-cols-2', styles.mainNavGroup) }>
                            { navData.mainExits.map(({ title, url, about }, index) => 
                                <li key={ index } className="col-span-1 mb-8">
                                    <a href={ url }>
                                        <h3 className="font-heading mb-2 text-3xl">{ title }</h3>
                                        <p className="mb-0 opacity-50">{ about }</p>
                                    </a>
                                </li>
                            )}
                        </ul>
                        
                        <h6 className="mt-6">This may be interesting too</h6>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NavMain