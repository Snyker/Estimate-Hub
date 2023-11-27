import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {Drawer, DrawerProps} from "@/app/_ui/drawer/Drawer";
import {DrawerHeader} from "@/app/_ui/drawer/DrawerHeader";
import {DrawerFooter} from "@/app/_ui/drawer/DrawerFooter";
import {DrawerBody} from "@/app/_ui/drawer/DrawerBody";

describe('Drawer Component', () => {
    const defaultProps: DrawerProps = {
        children: 'Drawer content',
    };

    describe('Drawer', () => {

        it('renders correctly with default props', () => {
            const tree = renderer.create(<Drawer {...defaultProps} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('applies custom class', () => {
            const tree = renderer.create(<Drawer {...defaultProps} className="custom-class" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('applies side class correctly', () => {
            const tree = renderer.create(<Drawer {...defaultProps} side="right" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('does not close when stopClose is true', () => {
            const tree = renderer.create(<Drawer {...defaultProps} stopClose={true} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders as open when open is true', () => {
            const tree = renderer.create(<Drawer {...defaultProps} open={true} />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles onClick event', () => {
            const onClickMock = jest.fn();
            const tree = renderer.create(<Drawer {...defaultProps} onClick={onClickMock} />);

            act(() => {
                tree.root.props.onClick();
            })


            expect(onClickMock).toHaveBeenCalled();
        });

        it('renders content based on children', () => {
            const tree = renderer.create(<Drawer {...defaultProps}><div>Custom content</div></Drawer>).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders additional HTML attributes', () => {
            const tree = renderer.create(<Drawer {...defaultProps} data-testid="drawer" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('handles className collision between props and side class', () => {
            const tree = renderer.create(<Drawer {...defaultProps} className="drawer-right" />).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('renders correctly with multiple complex props', () => {
            const onClickMock = jest.fn();
            const tree = renderer.create(
                <Drawer {...defaultProps} side="bottom" className="custom-class" stopClose={true} open={true} onClick={onClickMock}>
                    <div>Custom content</div>
                </Drawer>
            );
            expect(tree.toJSON()).toMatchSnapshot();
            act(() => {
                tree.root.props.onClick();
            })

            expect(onClickMock).toHaveBeenCalled();
        });
    })

    describe('DrawerBody', () => {
        it('renders correctly with default props', () => {
            const tree = renderer.create(<DrawerBody {...defaultProps} />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('applies custom class', () => {
            const tree = renderer.create(<DrawerBody {...defaultProps} className="custom-class" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('handles onClick event', () => {
            const onClickMock = jest.fn();
            const tree = renderer.create(<DrawerBody {...defaultProps} onClick={onClickMock} />);
            act(() => {
                tree.root.props.onClick();
            });
            expect(onClickMock).toHaveBeenCalled();
        });

        it('renders content based on children', () => {
            const tree = renderer.create(<DrawerBody {...defaultProps}><div>Custom content</div></DrawerBody>);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders additional HTML attributes', () => {
            const tree = renderer.create(<DrawerBody {...defaultProps} data-testid="drawer-body" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders correctly with multiple complex props', () => {
            const tree = renderer.create(
                <DrawerBody {...defaultProps} className="custom-class" onClick={() => {}} data-testid="drawer-body">
                    <div>Custom content</div>
                </DrawerBody>
            );
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });

    describe('DrawerFooter', () => {
        it('renders correctly with default props', () => {
            const tree = renderer.create(<DrawerFooter {...defaultProps} />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('applies custom class', () => {
            const tree = renderer.create(<DrawerFooter {...defaultProps} className="custom-class" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders additional HTML attributes', () => {
            const tree = renderer.create(<DrawerFooter {...defaultProps} data-testid="drawer-footer" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders correctly with multiple complex props', () => {
            const tree = renderer.create(
                <DrawerFooter {...defaultProps} className="custom-class" data-testid="drawer-footer">
                    <div>Custom content</div>
                </DrawerFooter>
            );
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });

    describe('DrawerHeader', () => {
        it('renders correctly with default props', () => {
            const tree = renderer.create(<DrawerHeader {...defaultProps} />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('applies custom class', () => {
            const tree = renderer.create(<DrawerHeader {...defaultProps} className="custom-class" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders additional HTML attributes', () => {
            const tree = renderer.create(<DrawerHeader {...defaultProps} data-testid="drawer-header" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders correctly with multiple complex props', () => {
            const tree = renderer.create(
                <DrawerHeader {...defaultProps} className="custom-class" data-testid="drawer-header">
                    <div>Custom content</div>
                </DrawerHeader>
            );
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });
});
