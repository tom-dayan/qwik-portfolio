/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import {Chip} from '@mui/material';
import '../../components/styles/Expertise.scss'

interface ChipProps {
    key: number;
    label: string;
}

export const QChip = qwikify$<ChipProps>(({key, label}) => {
    return(
        <Chip key={key} className="chip" label={label}></Chip>
        );
    }, { eagerness: 'hover' });