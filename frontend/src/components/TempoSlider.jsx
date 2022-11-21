import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Slider } from '@mui/material';
import { sliderTheme } from '../styles/sliderTheme';

export const TempoSlider = () => {
    const [tempoValue, setTempoValue] = useState(120);

    const defaultTempo = 120;
    const maxTempo = 180;
    const minTempo = 60;
    return (
        <div className="tempo-container">
            <div className="tempo-text">Tempo: {tempoValue} bpm</div>
            <ThemeProvider theme={sliderTheme}>
                <Slider
                    aria-label="Tempo"
                    defaultValue={defaultTempo}
                    valueLabelDisplay="off"
                    min={minTempo}
                    max={maxTempo}
                    onChange={(e, value) => {
                        setTempoValue(value);
                    }}
                    sx={{ width: '80%', marginLeft: '3%' }}
                />
            </ThemeProvider>
        </div>
    );
};
