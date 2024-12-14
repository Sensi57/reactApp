import styles from './Flex.module.css'
import classNames from 'classnames';


type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around'
type FlexAlign = 'start' | 'center' | 'end' | 'normal'
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '120'

const justifyClasses: Record<FlexJustify, string> = {
    between: styles['justify-between'],
    center: styles['justify-center'],
    around: styles['justify-around'],
    end: styles['justify-end'],
    start: styles['justify-start']
}

const directionClasses: Record<FlexDirection, string> = {
	row: styles['direction-row'],
	column: styles['direction-col'],
};

const alignClasses: Record<FlexAlign, string> = {
    end: styles['align-end'],
    start: styles['align-start'],
    center: styles['align-center'],
    normal: styles['align-normal']
}

const gapClasses: Record<FlexGap, string> = {
    '4': styles.gap4,
    '8': styles.gap8,
    '16': styles.gap16,
    '120': styles.gap120
}

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
interface FlexProps extends DivProps {
    className?: string; 
    justify?: FlexJustify;
    align: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    maxWidth ?: boolean;
    maxHeigh ?: boolean;
    dataTestId ?: string;
    component?: React.ElementType;
}


export const Flex = ({
    children,
    justify,
    align,
    direction,
    gap,
    className = '',
    maxWidth,
    maxHeigh,
    dataTestId = 'Flex',
    component = 'div',
    ...otherProps
}: React.PropsWithChildren<FlexProps>) => {
    const Component = component

    return (
        <Component className={classNames(
            styles.flex,
            justify && justifyClasses[justify],
            align && alignClasses[align],
            direction && directionClasses[direction],
            gap && gapClasses[gap],
            maxWidth && styles['max-width'],
            maxHeigh && styles['max-height'],
            className
        )} 
        {...otherProps}
        dataTestId={dataTestId}
        >
            {children}
        </Component>
    )

}