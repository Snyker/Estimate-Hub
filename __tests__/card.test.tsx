import React from 'react';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import {Card} from "@/app/_ui/cards/Card";
import {CardAdd, CardAddProps} from "@/app/_ui/cards/CardAdd";
import {CardHeader} from "@/app/_ui/cards/CardHeader";
import {CardBody} from "@/app/_ui/cards/CardBody";
import {CardFooter} from "@/app/_ui/cards/CardFooter";

describe('Card Components', () => {
    const defaultProps = {
        children: 'Card content',
    };

    describe('Card', () => {
        it('renders correctly with default props', () => {
            const tree = renderer.create(<Card {...defaultProps} />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('applies custom class', () => {
            const tree = renderer.create(<Card {...defaultProps} className="custom-class" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('handles onClick event', () => {
            const onClickMock = jest.fn();
            const tree = renderer.create(<Card {...defaultProps} onClick={onClickMock} />);
            act(() => {
                tree.root.props.onClick();
            });
            expect(onClickMock).toHaveBeenCalled();
        });

        it('renders content based on children', () => {
            const tree = renderer.create(<Card {...defaultProps}><div>Custom content</div></Card>);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders additional HTML attributes', () => {
            const tree = renderer.create(<Card {...defaultProps} data-testid="card" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders correctly with multiple complex props', () => {
            const tree = renderer.create(
                <Card {...defaultProps} className="custom-class" onClick={() => {}} data-testid="card">
                    <div>Custom content</div>
                </Card>
            );
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });

    describe('CardAdd', () => {
        const cardAddProps: CardAddProps = {
            title: 'Add Card',
        };

        it('renders correctly with default props', () => {
            const tree = renderer.create(<CardAdd {...cardAddProps} />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders additional HTML attributes', () => {
            const tree = renderer.create(<CardAdd {...cardAddProps} data-testid="card-add" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

    });

    describe('CardBody', () => {
        it('renders correctly with default props', () => {
            const tree = renderer.create(<CardBody {...defaultProps} />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('applies custom class', () => {
            const tree = renderer.create(<CardBody {...defaultProps} className="custom-class" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('handles onClick event', () => {
            const onClickMock = jest.fn();
            const tree = renderer.create(<CardBody {...defaultProps} onClick={onClickMock} />);
            act(() => {
                tree.root.props.onClick();
            });
            expect(onClickMock).toHaveBeenCalled();
        });

        it('renders content based on children', () => {
            const tree = renderer.create(<CardBody {...defaultProps}><div>Custom content</div></CardBody>);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders additional HTML attributes', () => {
            const tree = renderer.create(<CardBody {...defaultProps} data-testid="card-body" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders correctly with multiple complex props', () => {
            const tree = renderer.create(
                <CardBody {...defaultProps} className="custom-class" onClick={() => {}} data-testid="card-body">
                    <div>Custom content</div>
                </CardBody>
            );
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });

    describe('CardFooter', () => {
        it('renders correctly with default props', () => {
            const tree = renderer.create(<CardFooter {...defaultProps} />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('applies custom class', () => {
            const tree = renderer.create(<CardFooter {...defaultProps} className="custom-class" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders content based on children', () => {
            const tree = renderer.create(<CardFooter {...defaultProps}><div>Custom content</div></CardFooter>);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders additional HTML attributes', () => {
            const tree = renderer.create(<CardFooter {...defaultProps} data-testid="card-footer" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders correctly with multiple complex props', () => {
            const tree = renderer.create(
                <CardFooter {...defaultProps} className="custom-class" data-testid="card-footer">
                    <div>Custom content</div>
                </CardFooter>
            );
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });

    describe('CardHeader', () => {
        it('renders correctly with default props', () => {
            const tree = renderer.create(<CardHeader {...defaultProps} />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('applies custom class', () => {
            const tree = renderer.create(<CardHeader {...defaultProps} className="custom-class" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders content based on children', () => {
            const tree = renderer.create(<CardHeader {...defaultProps}><div>Custom content</div></CardHeader>);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders additional HTML attributes', () => {
            const tree = renderer.create(<CardHeader {...defaultProps} data-testid="card-header" />);
            expect(tree.toJSON()).toMatchSnapshot();
        });

        it('renders correctly with multiple complex props', () => {
            const tree = renderer.create(
                <CardHeader {...defaultProps} className="custom-class" data-testid="card-header">
                    <div>Custom content</div>
                </CardHeader>
            );
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });
});
