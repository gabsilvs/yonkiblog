# 📧 Configuração do EmailJS - Formulário de Contato

Este guia explica como configurar o EmailJS para que o formulário de contato funcione corretamente.

## 🚀 Passos para Configuração

### 1. **Criar Conta no EmailJS**
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Verifique seu email

### 2. **Configurar Serviço de Email**
1. No painel, clique em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email (Gmail, Outlook, Yahoo, etc.)
4. Conecte sua conta seguindo as instruções
5. Anote o **Service ID** (ex: `service_21qyq1d`)

### 3. **Criar Template de Email**
1. Clique em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template com estas variáveis:

**Subject:**
```
Nova mensagem de {{from_name}} - {{subject}}
```

**HTML Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nova mensagem do portfólio</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #6b7280;">Nova mensagem recebida!</h2>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
            <p><strong>Assunto:</strong> {{subject}}</p>
        </div>

        <div style="background: #fff; border: 1px solid #dee2e6; padding: 20px; border-radius: 8px;">
            <h3>Mensagem:</h3>
            <p style="white-space: pre-wrap;">{{message}}</p>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #dee2e6;">

        <p style="color: #6c757d; font-size: 14px;">
            Esta mensagem foi enviada através do formulário de contato do seu portfólio.
        </p>
    </div>
</body>
</html>
```

4. Salve o template e anote o **Template ID** (ex: `template_xxxxx`)

### 4. **Obter Chave Pública**
1. Clique em **"Account"** > **"General"**
2. Copie a **Public Key** (ex: `xxxxxxxxxxxxxx`)

### 5. **Configurar no Projeto**
1. Abra o arquivo `lib/emailjs-config.ts`
2. Substitua os valores pelas suas credenciais:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_21qyq1d', // Seu Service ID
  TEMPLATE_ID: 'template_q3z0jpg', // Seu Template ID
  PUBLIC_KEY: 'FMerQ_PhajxLZBzGt', // Sua Public Key
  TO_EMAIL: 'gabrielsilvestre1164@gmail.com' // Seu email
};
```

## 🧪 Testando o Formulário

1. Execute o projeto: `npm run dev`
2. Acesse a página de contato
3. Preencha o formulário com dados de teste
4. Clique em "Enviar Mensagem"
5. Verifique se recebeu o email

## 🔧 Resolução de Problemas

### **Erro: "Invalid service ID"**
- Verifique se o Service ID está correto
- Certifique-se de que o serviço de email está ativo

### **Erro: "Template not found"**
- Verifique se o Template ID está correto
- Certifique-se de que o template está salvo

### **Erro: "Invalid public key"**
- Verifique se a Public Key está correta
- Vá em Account > General para confirmar

### **Emails não chegam**
- Verifique a pasta de spam
- Certifique-se de que o email de destino está correto
- Teste com diferentes provedores de email

## 📊 Limites Gratuitos

- **200 emails/mês** (plano gratuito)
- **1 serviço de email**
- **2 templates**
- Suporte para HTML e texto simples

## 💰 Planos Pagos

Se precisar de mais emails, considere os planos pagos:
- **Starter**: 1.000 emails/mês - $9/mês
- **Business**: 10.000 emails/mês - $29/mês
- **Pro**: Emails ilimitados - $99/mês

## 🎯 Funcionalidades Implementadas

✅ **Formulário controlado** com React state
✅ **Validação de campos** obrigatórios
✅ **Validação de email** com regex
✅ **Estados de loading** durante envio
✅ **Feedback visual** de sucesso/erro
✅ **Animações** com Framer Motion
✅ **Design responsivo**
✅ **Prevenção de spam** com validações

## 📞 Suporte

- **Documentação EmailJS**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **Comunidade**: [Discord/Reddit do EmailJS]
- **Suporte**: support@emailjs.com

---

**Nota**: Lembre-se de nunca compartilhar suas chaves públicas em repositórios públicos!
