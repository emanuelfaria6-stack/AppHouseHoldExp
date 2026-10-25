import {NextResponse} from 'next/server'
import OpenAI from 'openai'
export async function POST(req:Request){const {text}=await req.json();if(!process.env.OPENAI_API_KEY)return NextResponse.json({merchant:'A configurar IA',date:new Date().toISOString().slice(0,10),total:0,currency:'EUR',category:'Outros',payment:'Desconhecido',items:[],rawText:text})
 const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY})
 const r=await client.chat.completions.create({model:'gpt-5-mini',response_format:{type:'json_object'},messages:[{role:'system',content:'És um extrator de recibos. Responde apenas JSON com merchant,date,total,currency,tax,category,subcategory,payment,invoiceNumber,items. items é array de name,quantity,unitPrice,total,category,subcategory. Não inventes campos; usa null quando não estiverem no texto. Categorias principais: Alimentação, Supermercado, Restaurantes, Transportes, Combustível, Casa, Saúde, Entretenimento, Compras, Educação, Viagens, Serviços, Subscrições, Outros.'},{role:'user',content:text}]})
 return NextResponse.json(JSON.parse(r.choices[0].message.content||'{}'))
}
