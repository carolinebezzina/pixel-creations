
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

export default function MenuListComposition(props) {
    const { enableSection, enableSubSection } = props;

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    return (
        <ButtonGroup color="secondary" aria-label="outlined primary button group">
            <Button onClick={() => { enableSection(true, false, false, false); enableSubSection(false, false, false) }}>History</Button>
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                Projects
        </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="menu-list-grow"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem
                                        onClick={(event) => {
                                            handleClose(event);
                                            enableSection(false, false, false, false);
                                            enableSubSection(true, false, false)
                                        }}>
                                        Web Development
                                    </MenuItem>
                                    <MenuItem
                                        onClick={(event) => {
                                            handleClose(event);
                                            enableSection(false, false, false, false);
                                            enableSubSection(false, true, false)
                                        }}>
                                        Game Development
                                    </MenuItem>
                                    <MenuItem
                                        onClick={(event) => {
                                            handleClose(event);
                                            enableSection(false, false, false, false);
                                            enableSubSection(false, false, true)
                                        }}>
                                        3D Modeling
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
            <Button
                onClick={() => {
                    enableSection(false, false, true, false);
                    enableSubSection(false, false, false)
                }}>
                Now
            </Button>
            <Button
                onClick={() => {
                    enableSection(false, false, false, true);
                    enableSubSection(false, false, false)
                }}>
                Resume / Contact
            </Button>
        </ButtonGroup>
    );
}