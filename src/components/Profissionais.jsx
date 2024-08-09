import React from 'react';
import ReactDOM from 'react-dom';
import { ResponsivePieCanvas } from '@nivo/pie';
import './heroSection/index'; 

// Componente Profissionais
export const Profissionais = () => {
    const data = [
        { id: "Contabilista", label: "Contabilista", value: 426, color: "hsl(282, 70%, 50%)" },
        { id: "Pedreiro", label: "Pedreiro", value: 44, color: "hsl(139, 70%, 50%)" },
        { id: "Carpinteiro", label: "Carpinteiro", value: 556, color: "hsl(140, 70%, 50%)" },
        { id: "Canalizador", label: "Canalizador", value: 436, color: "hsl(160, 70%, 50%)" },
        { id: "Mecanico", label: "Mecanico", value: 202, color: "hsl(34, 70%, 50%)" },
        { id: "Tecnico de Frios", label: "Tecnico de Frios", value: 520, color: "hsl(63, 70%, 50%)" },
        { id: "Seralheiro", label: "Seralheiro", value: 504, color: "hsl(85, 70%, 50%)" },
        { id: "Tecnico de informatica", label: "Tecnico de Informática", value: 473, color: "hsl(25, 70%, 50%)" },
        { id: "Polidor de parede", label: "Polidor de Parede", value: 171, color: "hsl(190, 70%, 50%)" },
        { id: "Florista", label: "Florista", value: 457, color: "hsl(7, 70%, 50%)" },
        { id: "Rust", label: "Rust", value: 280, color: "hsl(207, 70%, 50%)" },
        { id: "Javascript", label: "Javascript", value: 484, color: "hsl(272, 70%, 50%)" },
        { id: "Scala", label: "Scala", value: 247, color: "hsl(314, 70%, 50%)" },
        { id: "Hack", label: "Hack", value: 337, color: "hsl(283, 70%, 50%)" },
        { id: "Pintor", label: "Pintor", value: 311, color: "hsl(174, 70%, 50%)" },
        { id: "Python", label: "Python", value: 380, color: "hsl(116, 70%, 50%)" },
        { id: "Ruby", label: "Ruby", value: 597, color: "hsl(33, 70%, 50%)" },
        { id: "Stylus", label: "Stylus", value: 84, color: "hsl(212, 70%, 50%)" }
    ];

    return (
        <div className="w-full h-[500px] p-4">
            <div className="h-full">
                <ResponsivePieCanvas
                    data={data}
                    margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    colors={{ scheme: 'paired' }}
                    borderColor={{
                        from: 'color',
                        modifiers: [['darker', 0.6]]
                    }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor="#333333"
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        { match: { id: 'Contabilista' }, id: 'dots' },
                        { match: { id: 'Pedreiro' }, id: 'dots' },
                        { match: { id: 'Carpinteiro' }, id: 'dots' },
                        { match: { id: 'Tecnico de Frios' }, id: 'dots' },
                        { match: { id: 'Polidor de parede' }, id: 'lines' },
                        { match: { id: 'Pintor' }, id: 'lines' },
                        { match: { id: 'Florista' }, id: 'lines' },
                        { match: { id: 'Javascript' }, id: 'lines' }
                    ]}
                    legends={[
                        {
                            anchor: 'right',
                            direction: 'column',
                            justify: false,
                            translateX: 140,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 60,
                            itemHeight: 14,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 14,
                            symbolShape: 'circle'
                        }
                    ]}
                />
            </div>
        </div>
    );
};