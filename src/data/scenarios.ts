import type { Scenario } from '../types';
import { Sprout, CloudRain, ShieldCheck, Skull, DollarSign, Warehouse, Cross } from 'lucide-react';

export const scenarios: Scenario[] = [
    {
        id: 'start_season',
        titleKey: 'scenarios.start_season.title',
        textKey: 'scenarios.start_season.text',
        season: 'Sowing',
        imagePath: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop', // Sowing/Field
        choices: [
            {
                id: 'buy_high_yield',
                textKey: 'scenarios.start_season.choices.buy_high_yield',
                icon: Sprout,
                cost: 2000,
                effect: {
                    cash: -2000,
                    cropHealth: 90,
                    stress: 10,
                },
                nextId: 'weather_report',
            },
            {
                id: 'buy_standard',
                textKey: 'scenarios.start_season.choices.buy_standard',
                icon: Sprout,
                cost: 500,
                effect: {
                    cash: -500,
                    cropHealth: 60,
                    stress: 0,
                },
                nextId: 'weather_report',
            },
        ],
    },
    {
        id: 'weather_report',
        titleKey: 'scenarios.weather_report.title',
        textKey: 'scenarios.weather_report.text',
        season: 'Growing',
        imagePath: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=1000&auto=format&fit=crop', // Storm/Weather
        choices: [
            {
                id: 'buy_insurance',
                textKey: 'scenarios.weather_report.choices.buy_insurance',
                icon: ShieldCheck,
                cost: 1000,
                effect: {
                    cash: -1000,
                    risk: -50,
                    stress: -20,
                },
                nextId: 'pest_attack',
            },
            {
                id: 'skip_insurance',
                textKey: 'scenarios.weather_report.choices.skip_insurance',
                icon: CloudRain,
                cost: 0,
                effect: {
                    risk: 20,
                    stress: 10,
                },
                nextId: 'pest_attack',
            },
        ],
    },
    {
        id: 'pest_attack',
        titleKey: 'scenarios.pest_attack.title',
        textKey: 'scenarios.pest_attack.text',
        season: 'Growing',
        imagePath: 'https://images.unsplash.com/photo-1587570530737-0401d8129bd9?q=80&w=1000&auto=format&fit=crop', // Pest/Insect
        choices: [
            {
                id: 'buy_pesticide',
                textKey: 'scenarios.pest_attack.choices.buy_pesticide',
                icon: Skull,
                cost: 1500,
                effect: {
                    cash: -1500,
                    cropHealth: 10,
                    stress: -10
                },
                nextId: 'harvest_time'
            },
            {
                id: 'natural_remedy',
                textKey: 'scenarios.pest_attack.choices.natural_remedy',
                icon: Cross,
                cost: 0,
                effect: {
                    cropHealth: -30,
                    stress: 20
                },
                nextId: 'harvest_time'
            }
        ]
    },
    {
        id: 'harvest_time',
        titleKey: 'scenarios.harvest_time.title',
        textKey: 'scenarios.harvest_time.text',
        season: 'Harvest',
        imagePath: 'https://images.unsplash.com/photo-1625246333195-bf46fe684615?q=80&w=1000&auto=format&fit=crop', // Harvest/Golden Field
        choices: [
            {
                id: 'sell_now',
                textKey: 'scenarios.harvest_time.choices.sell_now',
                icon: DollarSign,
                effect: {
                    cash: 8000,
                    stress: -50,
                    risk: 0
                },
                nextId: 'start_season'
            },
            {
                id: 'wait_for_price',
                textKey: 'scenarios.harvest_time.choices.wait_for_price',
                icon: Warehouse,
                effect: {
                    cash: 0,
                    risk: 30,
                    stress: 10
                },
                nextId: 'market_fluctuation'
            }
        ]
    },
    {
        id: 'market_fluctuation',
        titleKey: 'scenarios.market_fluctuation.title',
        textKey: 'scenarios.market_fluctuation.text',
        season: 'Harvest',
        imagePath: 'https://images.unsplash.com/photo-1625246333195-bf46fe684615?q=80&w=1000&auto=format&fit=crop',
        choices: [
            {
                id: 'sell_low',
                textKey: 'scenarios.market_fluctuation.choices.sell_low',
                icon: DollarSign,
                effect: {
                    cash: 6000,
                    stress: -20,
                    risk: -10
                },
                nextId: 'money_lender'
            },
            {
                id: 'wait_more',
                textKey: 'scenarios.market_fluctuation.choices.wait_more',
                icon: Warehouse,
                effect: {
                    cash: -500, // storage cost
                    risk: 50,
                    stress: 30
                },
                nextId: 'money_lender'
            }
        ]
    },
    {
        id: 'money_lender',
        titleKey: 'scenarios.money_lender.title',
        textKey: 'scenarios.money_lender.text',
        season: 'Lean',
        imagePath: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop', // Money/Docs
        choices: [
            {
                id: 'bank_loan',
                textKey: 'scenarios.money_lender.choices.bank_loan',
                icon: Warehouse, // Bank icon placeholder
                effect: {
                    cash: 5000,
                    stress: 20, // Paperwork stress
                    risk: 0
                },
                nextId: 'family_emergency'
            },
            {
                id: 'money_lender',
                textKey: 'scenarios.money_lender.choices.money_lender',
                icon: DollarSign,
                effect: {
                    cash: 4500, // Less because high interest deduction upfront or similar
                    stress: -10, // Easy money
                    risk: 40 // Debt trap risk
                },
                nextId: 'family_emergency'
            }
        ]
    },
    {
        id: 'family_emergency',
        titleKey: 'scenarios.family_emergency.title',
        textKey: 'scenarios.family_emergency.text',
        season: 'Lean',
        imagePath: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop', // Hospital
        choices: [
            {
                id: 'pay_hospital',
                textKey: 'scenarios.family_emergency.choices.pay_hospital',
                icon: Cross,
                cost: 2000,
                effect: {
                    cash: -2000,
                    stress: -20,
                    cropHealth: 0
                },
                nextId: 'gov_scheme'
            },
            {
                id: 'ignore_health',
                textKey: 'scenarios.family_emergency.choices.ignore_health',
                icon: Skull,
                effect: {
                    stress: 50,
                    risk: 30
                },
                nextId: 'gov_scheme'
            }
        ]
    },
    {
        id: 'gov_scheme',
        titleKey: 'scenarios.gov_scheme.title',
        textKey: 'scenarios.gov_scheme.text',
        season: 'Sowing', // Next cycle start
        imagePath: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1000&auto=format&fit=crop', // Gov/Office
        choices: [
            {
                id: 'apply_scheme',
                textKey: 'scenarios.gov_scheme.choices.apply_scheme',
                icon: ShieldCheck,
                effect: {
                    cash: 1000, // Subsidy
                    stress: 10
                },
                nextId: 'start_season'
            },
            {
                id: 'buy_market',
                textKey: 'scenarios.gov_scheme.choices.buy_market',
                icon: DollarSign,
                cost: 500,
                effect: {
                    cash: -500,
                    stress: -5
                },
                nextId: 'start_season'
            }
        ]
    }
];
