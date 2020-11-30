import { CSSProperties } from '@material-ui/core/styles/withStyles'
import React, { FC, useState } from 'react'
import ReactTooltip from 'react-tooltip';

export interface CopyTooltipProps {
	value: string;
	label?: string;
	copyLabel?: string;
	className?: string;
	style?: CSSProperties;
}

export const CopyTooltip: FC<CopyTooltipProps> = ({
	value,
	label,
	copyLabel,
	className,
	style,
	children
}) => {
	const key = `copy_tooltip_${ new Date().getTime() }`;

	const defaultLabel = label ?? 'copier';
	const [smartLabel, setSmartLabel] = useState<string>(label ?? defaultLabel);

	const copy = (value: string) => {
		navigator.clipboard.writeText(value).then(() => {
			setSmartLabel(copyLabel ?? '✌ copié !');
		}, () => {
			setSmartLabel('⛔ erreur');
		});
	}

	return (
		<div 
		className={className} 
		style={style}
		data-tip={smartLabel}
		data-for={key}
		onClick={() => copy(value)}>
			{children}
			<ReactTooltip
			afterHide={() => setSmartLabel(label ?? defaultLabel)}
			id={key} 
			getContent={() => smartLabel}
			effect='solid' 
			place='right' 
			type='info' 
			backgroundColor="var(--deep-blue)"/>
		</div>
	)
}
