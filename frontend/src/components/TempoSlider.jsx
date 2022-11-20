import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Slider } from '@mui/material';
import { sliderTheme } from '../styles/sliderTheme';

export const TempoSlider = () => {
    const [tempoValue, setTempoValue] = useState(120);
    return (
        <div className="tempo-container">
            <div className="tempo-text">Tempo: {tempoValue} bpm</div>
            <ThemeProvider theme={sliderTheme}>
                <Slider
                    aria-label="Tempo"
                    defaultValue={120}
                    valueLabelDisplay="off"
                    min={60}
                    max={180}
                    onChange={(e, value) => {
                        setTempoValue(value);
                    }}
                    sx={{ width: '80%', marginLeft: '3%' }}
                />
            </ThemeProvider>
        </div>
    );
};
